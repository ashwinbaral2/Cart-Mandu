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

type FormValues = {
    username: string
    password: string
}

const SignupSchema = Yup.object({
    username: Yup.string()
        .min(2, "Too short")
        .max(50, "Too long")
        .required("Username is required"),
    password: Yup.string().required("Password is required"),
})

export default function LoginCard() {
    const router = useRouter()

    const handleLogin = async (values: FormValues) => {
        try {
            const { data } = await axios.post(
                "https://fakestoreapi.com/auth/login",
                values
            )

            if (data.token) {
                router.push("/")
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                toast(err.response?.data ?? "Login failed")
            } else {
                toast("Something went wrong")
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100">
            <Formik<FormValues>
                initialValues={{ username: "", password: "" }}
                validationSchema={SignupSchema}
                onSubmit={handleLogin}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                }) => (
                    <Form>
            <h1 className="text-6xl font-bold p-5 flex justify-center ">Cart-Mandu</h1>

                        <Card className="w-sm p-10 m-10">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center mb-2">
                                    Login to your Account
                                </CardTitle>
                                <CardDescription className="text-center">
                                    Welcome back! Please login to your account.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="username">User Name</Label>
                                    <Input
                                        id="username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your username"
                                    />
                                    {touched.username && errors.username && (
                                        <p className="text-sm text-red-500">
                                            {errors.username}
                                        </p>
                                    )}
                                </div>

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
                                        <p className="text-sm text-red-500">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full mt-2">
                                    Login
                                </Button>
                            </CardContent>
                        </Card>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
