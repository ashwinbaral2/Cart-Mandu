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
import { Edit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EditUser(props: any) {
    const [formData, setFormData] = useState({
        username: props.item.username || "",
        email: props.item.email || "",
        password: props.item.password || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async () => {
        try {
            await editProducts(props.item.id, formData);
            toast.success("Your changes have been saved!");
            // props.fetchData();
        } catch {
            toast.error("Failed to update product");
        }
    };

    const editProducts = async (id: any, userInfo: any) => {
        try {
            const { data } = await axios.put(
                `https://fakestoreapi.com/users/${id}`,
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
                    <Button className="font-bold bg-zinc-600 hover:bg-zinc-700 hover:text-white text-white  mb-2 w-full">
                        {" "}
                        <Edit /> Edit
                    </Button>

                </DialogTrigger>
                <DialogContent className="sm:max-w-425px">
                    <DialogHeader>
                        <DialogTitle> Edit User Details </DialogTitle>
                        <DialogDescription>
                            Edit user details here. Click save when you&apos;re done.
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
                        <DialogClose asChild>
                            <Button onClick={handleSubmit} type="button">
                                Save
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
