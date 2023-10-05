import { ButtonHTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface InputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
}

export interface FormDataType {
  name: string;
  email: string;
  message: string;
};

export interface FormErrorsType {
  name: boolean;
  email: boolean;
  message: boolean;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  icon?: React.ElementType;
  iconPosition?: string;
  children: ReactNode;
}

export interface JobEvent {
  date: string;
  title: string;
  occupation: string;
  description: string | JSX.Element;
}

export interface EducationEvent {
  date: string;
  title: string;
  occupation: string;
  description: string;
}

export interface QualificationIcon {
  name: string;
  event: JobEvent[] | EducationEvent[];
  icon: SVGRectElement | any;
}

export interface PropsTimeline {
  events: JobEvent[] | EducationEvent[];
  Icon: SVGRectElement | any;
}

export interface ServiceItemProps {
  icon: React.ReactNode;
  services: string[];
}

export interface ProjectProps {
  name: string;
  site: string;
  repository: string;
  logo: StaticImageData;
}

export interface ProjectItemProps {
  project: ProjectProps;
}
