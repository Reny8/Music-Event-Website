import Image from "next/image";
import Link from "next/link";
import Default from "@/images/event-default.png";
import styles from "@/styles/component.module.css";
export default function EventItem({ evt }) {
  return (
    <div className={styles.card}>
      <div className={styles.start}>
        <Image src={evt.image ? evt.image : Default} width={170} height={100} />
        <div>
          <span>
            {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
          </span>
          <h3>{evt.name}</h3>
        </div>
      </div>

      <div className="btn">
        <Link href={`/events/${evt.slug}`}>Details</Link>
      </div>
    </div>
  );
}
