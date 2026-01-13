'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type RegisterValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterSchema = Yup.object({
  username: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
})

export default function RegisterCard() {
  const router = useRouter()

  const handleRegister = async (values: RegisterValues) => {
    try {
      // Replace with your real API
      await axios.post("/api/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      })

      toast("Account created successfully 🎉")
      router.push("/login")
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast(err.response?.data ?? "Registration failed")
      } else {
        toast("Something went wrong")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <Formik<RegisterValues>
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form>
            <h1 className="text-6xl font-bold p-5 flex justify-center ">Cart-Mandu</h1>
            <Card className="w-2xl p-10 m-10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Create Your Account Now!
                </CardTitle>
                <CardDescription className=" text-xl text-center">
                  Sign up to get started
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="yourname"
                  />
                  {touched.username && errors.username && (
                    <p className="text-sm text-red-500">{errors.username}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="********"
                  />
                  {touched.password && errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="********"
                  />
                  {touched.confirmPassword &&
                    errors.confirmPassword && (
                      <p className="text-sm text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                </div>

                <Button
                  type="submit"
                  className="w-full mt-2"
                  disabled={isSubmitting}
                >
                  Create Account
                </Button>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  )
}
