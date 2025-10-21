"use client";

import ContactUsComponent from "@/components/ContactUs/ContactUsComponent";
import { TextEffect } from "@/components/motion-primitives/text-effect";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { MdMarkUnreadChatAlt } from "react-icons/md";

const Cta = ({ data }: { data?: ContactUsType | null }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="fixed bottom-4 start-4 z-50"
        onPress={onOpen}
        aria-label="Contact Us"
      >
        <MdMarkUnreadChatAlt className="size-5" />
      </Button>

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
                {data?.description && (
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
                    {data.description}
                  </TextEffect>
                )}
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

export default Cta;
