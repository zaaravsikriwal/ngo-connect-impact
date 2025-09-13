import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in animation for sections
      gsap.fromTo(
        '.gsap-fade-up',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.gsap-fade-up',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Scale animation for cards
      gsap.fromTo(
        '.gsap-scale',
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.gsap-scale',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Slide in from left
      gsap.fromTo(
        '.gsap-slide-left',
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-slide-left',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Slide in from right
      gsap.fromTo(
        '.gsap-slide-right',
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-slide-right',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Hero text animation
      gsap.fromTo(
        '.gsap-hero-text',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.3,
          delay: 0.5,
        }
      );

      // Floating animation for icons
      gsap.to('.gsap-float', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Counter animation
      gsap.fromTo(
        '.gsap-counter',
        {
          textContent: 0,
        },
        {
          textContent: (i, target) => target.getAttribute('data-count') || 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '.gsap-counter',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};

export const useGSAPHover = () => {
  const hoverAnimation = (element: HTMLElement, scale = 1.05) => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const resetAnimation = (element: HTMLElement) => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return { hoverAnimation, resetAnimation };
};