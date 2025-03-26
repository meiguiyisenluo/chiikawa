import Link from "next/link";
import React, { ElementType } from "react";

export default function IsLink<T extends ElementType>({
  children,
  href,
  ...props
}: React.ComponentProps<T> & {
  children: React.ReactNode;
  href: string | undefined;
}) {
  const Component = !!href ? Link : "span";
  return (
    <Component href={href} {...props}>
      {children}
    </Component>
  );
}
