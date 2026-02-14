"use client";

export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  icon,
  placeholder,
  className = "",
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-secondary-700">
        {label}
        {isRequired && <span className="text-red-500 mr-1">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {icon}
          </div>
        )}
        
        <input
          autoComplete="off"
          type={type}
          id={name}
          dir={dir}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 bg-white
            ${icon ? 'pl-10' : ''} 
            ${dir === "ltr" ? "text-left" : "text-right"}
            ${hasError 
              ? 'border-red-500 bg-red-50 focus:ring-red-500' 
              : 'border-secondary-300 hover:border-secondary-400 focus:border-primary-500'
            }
          `}
          {...register(name, validationSchema)}
          {...rest}
        />
      </div>

      {hasError && (
        <span className="text-red-500 text-xs block mt-1">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}