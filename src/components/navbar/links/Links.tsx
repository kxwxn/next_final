"use client";
import styles from "./Links.module.css";
import Link from "next/link";
import {useSelectedLayoutSegment} from "next/navigation";

const Links = () => {
    const segment = useSelectedLayoutSegment();

    return (
        <div className={styles.container}>
            <Link href="/" legacyBehavior>
                <a className={segment === "(face)" ? styles.faceSegment : undefined}>
                    face
                </a>
            </Link>
            <Link href="/body" legacyBehavior>
                <a className={segment === "body" ? styles.bodySegment : undefined}>
                    body
                </a>
            </Link>
            <Link href="/brain" legacyBehavior>
                <a className={segment === "brain" ? styles.brainSegment : undefined}>
                    brain
                </a>
            </Link>
            <Link href="/ear" legacyBehavior>
                <a className={segment === "ear" ? styles.earSegment : undefined}>ear</a>
            </Link>
            <Link href="/eye" legacyBehavior>
                <a className={segment === "eye" ? styles.eyeSegment : undefined}>eye</a>
            </Link>
            <Link href="/soul" legacyBehavior>
                <a className={segment === "soul" ? styles.soulSegment : undefined}>
                    soul
                </a>
            </Link>
        </div>
    );
};

export default Links;
