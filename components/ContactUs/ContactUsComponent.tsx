"use client";

import {
  Form,
  Input,
  Button,
  Textarea,
  addToast,
  Select,
  SelectItem,
} from "@heroui/react";

import { Card } from "@/components/ui/card";
import { useState } from "react";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const ContactUsComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
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
          description: "شكرًا لتواصلك سنتواصل معك قريبًا!",
          color: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
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

  const items = [
    { key: "مقطع ترويجي", label: "مقطع ترويجي" },
    { key: "صور احترافية", label: "صور احترافية" },
    { key: "حملة", label: "حملة" },
    { key: "غيره", label: "غيره" },
  ];

  return (
    <Card className="w-full max-w-xl mx-auto p-4 border-zinc-800 bg-zinc-900 shadow-2xl shadow-zinc-900">
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
          className="!text-orange-50"
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

        <Input
          type="email"
          name="email"
          label="البريد الإلكترونى"
          labelPlacement="inside"
          value={formData.email}
          onValueChange={(value) => handleInputChange("email", value)}
          errorMessage="البريد الإلكتروني غير صالح"
        />

        <Select
          required
          items={items}
          label="نوع العمل"
          selectedKeys={formData.serviceType ? [formData.serviceType] : []}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;
            handleInputChange("serviceType", selectedKey);
          }}
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>

        <Textarea
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
          className="w-full "
          isLoading={isLoading}
          disabled={isLoading}
        >
          {!isLoading && "إرسال"}
        </Button>
      </Form>
    </Card>
  );
};

export default ContactUsComponent;
