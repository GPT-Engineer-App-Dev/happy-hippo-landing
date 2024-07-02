import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to the World of Hippos</h1>
          <p className="mt-4 text-xl">Discover the fascinating life of hippos</p>
          <Button className="mt-8">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">About Hippos</h2>
        <div className="mt-8 flex flex-col items-center md:flex-row md:space-x-8">
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <p className="mt-4 md:mt-0 md:w-1/2">
            Hippos are large, mostly herbivorous mammals in sub-Saharan Africa. They are known for their large size, aggressive nature, and amphibious lifestyle. Hippos spend most of their time in water to keep their massive bodies cool under the hot African sun.
          </p>
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Interesting Facts</h2>
          <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-start space-x-4">
              <img src="/images/placeholder.svg" alt="Fact Icon" className="w-12 h-12" />
              <p>Hippos can hold their breath for up to 5 minutes underwater.</p>
            </li>
            <li className="flex items-start space-x-4">
              <img src="/images/placeholder.svg" alt="Fact Icon" className="w-12 h-12" />
              <p>Despite their size, hippos can run up to 30 km/h on land.</p>
            </li>
            <li className="flex items-start space-x-4">
              <img src="/images/placeholder.svg" alt="Fact Icon" className="w-12 h-12" />
              <p>Hippos are considered one of the most dangerous animals in Africa.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="mt-4 text-center">We'd love to hear from you! Please fill out the form below to get in touch.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto space-y-4">
            <div>
              <Input placeholder="Name" {...register("name")} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <Input placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <Textarea placeholder="Message" {...register("message")} />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Hippo World. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;