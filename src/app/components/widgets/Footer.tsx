'use client'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById('footer-trigger');
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current && target) {
        observerRef.current.unobserve(target);
      }
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      className="w-full py-4 bg-gray-100 flex flex-col items-center justify-center text-center text-sm text-gray-700"
    >
      <p className="mb-2">
        © {new Date().getFullYear()} Site desenvolvido por Mônica Araújo
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/monica308"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <IconBrandGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/monica-araujo-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <IconBrandLinkedin size={22} />
        </a>
        <a
          href="https://wa.me/5531994998935"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition"
        >
          <IconBrandWhatsapp size={22} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
