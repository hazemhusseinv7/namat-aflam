"use client";

import { Form, Input, Button, Textarea, addToast } from "@heroui/react";

import { Card } from "@/components/ui/card";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { useState } from "react";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addToast({
          title: "تم الإرسال بنجاح",
          description: "سيتم الرد عليك قريباً",
          color: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("فشل في إرسال الرسالة");
      }
    } catch (error) {
      addToast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        color: "danger",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-us">
      <div className="px-4 sm:px-5 md:px-8 lg:px-10 py-20 lg:py-40 container mx-auto">
        <div className="flex flex-col space-y-2 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit mx-auto leading-[1.4] text-center min-h-32 relative">
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
            {`تواصل معنا
             لنجيب عن استفساراتك`}
          </TextEffect>
        </div>

        <Card className="max-w-xl mx-auto px-6 bg-zinc-100/30 shadow-2xl shadow-zinc-200">
          <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              required
              type="text"
              name="name"
              label="الإسم"
              labelPlacement="inside"
              value={formData.name}
              onValueChange={(value) => handleInputChange("name", value)}
              errorMessage="الإسم مطلوب"
            />

            <Input
              type="email"
              name="email"
              label="البريد الإلكترونى"
              labelPlacement="inside"
              value={formData.email}
              onValueChange={(value) => handleInputChange("email", value)}
              errorMessage="البريد الإلكتروني غير صالح"
            />

            <Input
              required
              type="tel"
              name="phone"
              label="رقم الهاتف"
              labelPlacement="inside"
              value={formData.phone}
              onValueChange={(value) => handleInputChange("phone", value)}
              errorMessage="رقم الهاتف مطلوب"
            />

            <Textarea
              required
              name="message"
              label="الرسالة"
              labelPlacement="inside"
              value={formData.message}
              onValueChange={(value) => handleInputChange("message", value)}
              errorMessage="الرسالة مطلوبة"
            />
            <Button
              color="primary"
              type="submit"
              className="w-full bg-orange-600"
              isLoading={isLoading}
              disabled={isLoading}
            >
              {!isLoading && "إرسال"}
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
