import { useId, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children?: ReactNode;
};

export function Field({
  label,
  error,
  required,
  hint,
  className,
  children,
  render,
}: BaseProps & { render: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode }) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id} className="text-sm font-semibold">
        {label}
        {required ? (
          <span className="text-gold-deep" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="font-normal text-muted-foreground">(optional)</span>
        )}
      </Label>
      {render({ id, describedBy, invalid: Boolean(error) })}
      {hint ? (
        <p id={hintId} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function TextField({
  label,
  error,
  required,
  hint,
  className,
  type = "text",
  ...rest
}: BaseProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field label={label} error={error} required={required} hint={hint} className={className}
      render={({ id, describedBy, invalid }) => (
        <Input
          id={id}
          type={type}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className={cn("h-11 bg-background", invalid && "border-destructive")}
          {...rest}
        />
      )}
    />
  );
}

export function TextAreaField({
  label,
  error,
  required,
  hint,
  className,
  ...rest
}: BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Field label={label} error={error} required={required} hint={hint} className={className}
      render={({ id, describedBy, invalid }) => (
        <Textarea
          id={id}
          rows={4}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          className={cn("bg-background", invalid && "border-destructive")}
          {...rest}
        />
      )}
    />
  );
}
