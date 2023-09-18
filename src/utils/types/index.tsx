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

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export type FormErrorsType = {
  name: boolean;
  email: boolean;
  message: boolean;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
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
  onlyIcon: SVGRectElement;
  icon: any;
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
