import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateUser(props: any) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        avatar: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        createUser(formData);
        props.fetchData();
        toast.success("New user profile created successfully!");
    };

    const createUser = async (userInfo: any) => {
        try {
            const { data } = await axios.post(
                "https://fakestoreapi.com/users",
                userInfo,
            );
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="font-bold bg-green-600 hover:bg-green-700 hover:text-white text-white  mb-5"
                    >
                        Add User
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Fill New User Details </DialogTitle>
                        <DialogDescription>
                            Fill new user details here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        {/* Username */}
                        <div className="grid gap-3">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                onChange={handleChange}
                                placeholder="johnd"
                            />
                        </div>

                        {/* Email */}
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="john@gmail.com"
                            />
                        </div>

                        {/* First name */}
                        <div className="grid gap-3">
                            <Label>First Name</Label>
                            <Input
                                name="name.firstname"
                                onChange={handleChange}
                                placeholder="John"
                            />
                        </div>

                        {/* Last name */}
                        <div className="grid gap-3">
                            <Label>Last Name</Label>
                            <Input
                                name="name.lastname"
                                onChange={handleChange}
                                placeholder="Doe"
                            />
                        </div>

                        {/* Phone */}
                        <div className="grid gap-3">
                            <Label>Phone</Label>
                            <Input
                                name="phone"
                                onChange={handleChange}
                                placeholder="1-570-236-7033"
                            />
                        </div>

                        {/* Address */}
                        <div className="grid gap-3">
                            <Label>City</Label>
                            <Input
                                name="address.city"
                                onChange={handleChange}
                                placeholder="Kilcoole"
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label>Street</Label>
                            <Input
                                name="address.street"
                                onChange={handleChange}
                                placeholder="New Road"
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label>Street Number</Label>
                            <Input
                                name="address.number"
                                onChange={handleChange}
                                placeholder="7682"
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label>Zip Code</Label>
                            <Input
                                name="address.zipcode"
                                onChange={handleChange}
                                placeholder="12926-3874"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSubmit} type="button">
                            Add
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
