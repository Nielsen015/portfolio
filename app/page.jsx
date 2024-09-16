import { FiDownload } from "React-icons/fi";

// Components
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello! I am <br />{" "}
              <span className="text-accent">Moses Nielsen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A dynamic Software Engineer with a proven track record of
              delivering high-quality software solutions that align with
              organizational objectives.{" "}
            </p>
            {/* btn and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {" "}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
