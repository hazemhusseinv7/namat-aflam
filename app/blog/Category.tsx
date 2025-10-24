"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const Category = ({
  title,
  description,
  className,
}: CategoryType & {
  className?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={className} onPress={onOpen}  >
        {title}
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
              <ModalHeader>
                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {title}
                </span>
              </ModalHeader>
              <ModalBody>
                {description && (
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    {description}
                  </span>
                )}
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

export default Category;
