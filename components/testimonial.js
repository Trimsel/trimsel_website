import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Kalyan Krishnamurthy",
    position: "CEO at Flipkart",
    image: "/images/client.webp",
    linkedin: "https://www.linkedin.com/company/trimsel",
    feedback:
      "It’s a big team and what’s really good is that it’s a specialized team, so that means they have to be the best at what they do. I am very happy and impressed.",
  },
  {
    name: "Sundar Pichai",
    position: "CEO at Google",
    image: "/images/client2.webp",
    linkedin: "https://www.linkedin.com/company/trimsel",
    feedback:
      "Working with this team has been an exceptional experience. Their attention to detail and technical expertise are second to none.",
  },
];

export default function TestimonialClient() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Image src="/images/Rectangle-kariot.png" width={18} height={18} alt="" aria-hidden="true" loading="lazy" />
          Testimonials
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <h3 className="text-3xl font-semibold text-slate-900">What clients are saying about our collaboration</h3>
          <p className="text-lg text-slate-600">
            Teams trust Trimsel because we pair strategic direction with elite engineering talent. Here’s how our partners
            describe the collaboration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-inner"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  width={80}
                  height={80}
                  alt={testimonial.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                  <Link
                    href={testimonial.linkedin}
                    className="mt-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <Image src="/images/bi_linkedin.png" width={20} height={20} alt="" />
                  </Link>
                </div>
              </div>
              <blockquote className="mt-6 text-base leading-relaxed text-slate-600">{testimonial.feedback}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
