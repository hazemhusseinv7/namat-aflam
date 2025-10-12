"use client";

import { motion } from "motion/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import ContactUsComponent from "@/components/ContactUs/ContactUsComponent";
import { TextEffect } from "@/components/motion-primitives/text-effect";

import { cn } from "@/lib/utils";

interface HoverButtonProps {
  content: string;
  className?: string;
}

const HoverButton = ({ content, className }: HoverButtonProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className={cn(
          className,
          "relative rounded-full flex items-center w-56 md:w-80 text-black z-50 cursor-pointer"
        )}
        onClick={onOpen}
      >
        <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] hover:bg-[#d1d1d1]/80 hover:border-white/40 transition-colors duration-300 w-full py-2 md:py-2.5 rounded-full overflow-hidden">
          <motion.div className="absolute flex w-[204px] h-[103px] items-center justify-center pointer-events-none">
            <div className="absolute h-full w-full blur-[5px]" />
          </motion.div>
          <span className="text-lg font-semibold z-10">{content}</span>
        </div>
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <TextEffect
                  per="line"
                  as="h2"
                  segmentWrapperClassName="overflow-hidden block"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        y: 40,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                        },
                      },
                    },
                  }}
                >
                  {`فكرتك جاهزة…؟
                       نحن نعرف كيف نرويها!`}
                </TextEffect>
              </ModalHeader>
              <ModalBody>
                <ContactUsComponent />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  إغلاق
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HoverButton;
