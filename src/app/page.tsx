import Image from "next/image";
import styles from "./page.module.css";
import { ServicesSection1 } from "@/components/ServicesSection1";
import { Form } from '@/components/Form'
import { Notifications } from '@/components/Notifications'

export default function Home() {
  return (
    <div>
      <Notifications/>
      <ServicesSection1/>
      <Form/>
    </div>
  );
}
