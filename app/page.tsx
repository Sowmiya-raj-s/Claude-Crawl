import Image from "next/image";
import Link from "next/link";

const buttonClass =
  "inline-block rounded-full bg-chili px-6 py-3 font-semibold text-white transition-colors hover:bg-[#9c3524] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron";

function Media({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="bg-brand text-white">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="font-heading text-xl">
            Logo
          </Link>
          <nav aria-label="Main" className="flex flex-wrap gap-5 font-medium">
            <a href="#about" className="text-[#dfe8e3] hover:text-saffron">
              About
            </a>
            <a href="#details" className="text-[#dfe8e3] hover:text-saffron">
              Details
            </a>
            <a href="#contact" className="text-[#dfe8e3] hover:text-saffron">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="about" className="mx-auto max-w-[1120px] px-5 py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <Media
              src="/images/img1.jpg"
              alt="Placeholder illustration of a plate"
              priority
            />
            <div>
              <h1 className="mb-4 font-heading text-[clamp(2.2rem,6vw,4rem)] leading-[1.12] text-brand">
                A headline that says what this is
              </h1>
              <p className="mb-4 max-w-[62ch] text-muted">
                Write a short, clear introduction here. Say who the page is for
                and what they can do next, in plain words. Two or three
                sentences is enough.
              </p>
              <p className="mb-6 max-w-[62ch] text-muted">
                On phones the image sits above the text. On tablets and desktops
                they sit side by side.
              </p>
              <a href="#contact" className={buttonClass}>
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white">
          <section
            id="details"
            className="mx-auto max-w-[1120px] px-5 py-12 md:py-20"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
              <Media
                src="/images/img2.jpg"
                alt="Placeholder illustration of a page layout"
                className="md:order-2"
              />
              <div>
                <h2 className="mb-4 font-heading text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.12] text-brand">
                  A second section with more detail
                </h2>
                <p className="mb-4 max-w-[62ch] text-muted">
                  Use this block for the next point you want to make. The image
                  sits on the opposite side so the page has a natural rhythm as
                  people scroll.
                </p>
                <p className="max-w-[62ch] text-muted">
                  Swap the image, change the text, and duplicate the section as
                  many times as you need.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="mx-auto max-w-[1120px] px-5 py-12 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 font-heading text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.12] text-brand">
                Ready to talk?
              </h2>
              <p className="mb-6 max-w-[62ch] text-muted">
                Add your contact details or a short call to action here.
              </p>
              <a href="mailto:hello@example.com" className={buttonClass}>
                Email us
              </a>
            </div>
            <Media
              src="/images/img1.jpg"
              alt="Placeholder illustration of shapes"
              className="order-1 md:order-2"
            />
          </div>
        </section>
      </main>

      <footer className="bg-brand px-4 py-6 text-center text-[0.95rem] text-[#cbd8d2]">
        &copy; 2026 Your Brand. All rights reserved.
      </footer>
    </>
  );
}
