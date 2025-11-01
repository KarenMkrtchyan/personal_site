import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-[200px] md:h-[300px]">
        <Image
          src="/banner.jpg"
          alt="Beautiful banner"
          fill
          priority
          className="object-cover"
        />
      </section>
      <div>
        <div>
          1 serving of Computer Engineering and Science @ USC, with a side of
          Cybersecurity Cooking at high heat for 2 more years (May 27
          graduation)
          <br />I love building things that blend hardware and software that
          make people’s lives better. I’m interested in mathematics, AI/ML,
          distributed systems, big code, robotics, investing (crypto & kalshi),
          and risking my life for bursts of adrenaline
        </div>
        <section className="relative w-[50px] md:w-[75px] h-[50px] md:h-[75px]">
          <Image
            src="/me.jpg"
            alt="Beautiful man"
            fill
            priority
            className="object-cover"
          />
        </section>
      </div>
      <div>Content list</div>
      <div>Current</div>
      <div>Past</div>
    </div>
  );
}
