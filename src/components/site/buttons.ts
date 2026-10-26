import { cva, type VariantProps } from "class-variance-authority";

export const buttonClass = cva(
  "label-mono inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground hover:shadow-glow hover:-translate-y-0.5",
        outline:
          "border border-primary/50 text-primary hover:bg-primary-soft hover:border-primary",
        ghost: "text-foreground hover:text-primary",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
        false: "",
      },
    },
    defaultVariants: { variant: "solid", size: "md", disabled: false },
  },
);

export type ButtonClassProps = VariantProps<typeof buttonClass>;
