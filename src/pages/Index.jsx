import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-hero-pattern bg-cover bg-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to the World of Hippos</h1>
          <p className="mt-4 text-xl">Discover the fascinating life of hippos</p>
          <Button className="mt-8">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">About Hippos</h2>
        <div className="mt-8 flex flex-col items-center md:flex-row md:space-x-8">
          <img
            src="/images/placeholder.svg"
            alt="Hippo"
            className="w-full md:w-1/2"
          />
          <p className="mt-4 text-lg md:mt-0 md:w-1/2">
            Hippos are large, mostly herbivorous mammals in sub-Saharan Africa.
            They are known for their large size, aggressive nature, and
            amphibious lifestyle. Hippos spend most of their time in water to
            keep their massive bodies cool under the hot African sun.
          </p>
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Interesting Facts</h2>
          <ul className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-start space-x-4">
              <img
                src="/images/placeholder.svg"
                alt="Fact Icon"
                className="h-12 w-12"
              />
              <p className="text-lg">
                Hippos can hold their breath for up to 5 minutes underwater.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <img
                src="/images/placeholder.svg"
                alt="Fact Icon"
                className="h-12 w-12"
              />
              <p className="text-lg">
                Despite their size, hippos can run up to 30 km/h on land.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <img
                src="/images/placeholder.svg"
                alt="Fact Icon"
                className="h-12 w-12"
              />
              <p className="text-lg">
                Hippos secrete a natural sunscreen substance that is red-colored.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
          <img src="/images/placeholder.svg" alt="Hippo" className="w-full" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="mt-4 text-center text-lg">
            Have questions or want to learn more? Get in touch with us!
          </p>
          <form className="mt-8 max-w-lg mx-auto space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Hippo World. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;