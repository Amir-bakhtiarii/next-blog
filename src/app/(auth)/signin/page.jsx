"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import SpinnerMini from "@/ui/SpinnerMini";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const schema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      await signin(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-secondary-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-secondary-800 mb-2">
            ورود به حساب
          </h1>
          <p className="text-secondary-500 text-sm sm:text-base mt-3">
            خوش آمدید! لطفاً وارد حساب خود شوید
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register}
            dir="ltr"
            isRequired
            errors={errors}
            icon={<EnvelopeIcon className="w-5 h-5 text-secondary-400" />}
            placeholder="example@gmail.com"
            className="w-full"
          />
          <RHFTextField
            label="رمز عبور"
            name="password"
            register={register}
            type="password"
            dir="ltr"
            isRequired
            errors={errors}
            icon={<LockClosedIcon className="w-5 h-5 text-secondary-400" />}
            placeholder="********"
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-3 text-base font-medium mt-4 flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <SpinnerMini />
                <span>در حال ورود...</span>
              </>
            ) : (
              "ورود"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-secondary-500 text-sm sm:text-base">
            حساب کاربری ندارید؟{" "}
            <Link 
              href="/signup" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;