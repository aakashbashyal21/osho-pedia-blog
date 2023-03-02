import { formatDate } from "@/utils/formatDate";
import { readingTime } from "@/utils/readingTime";
import { truncateString } from "@/utils/truncateString";
import { IconCalendarEvent, IconClock } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";

export default function PostHorizontal({
  post: {
    slug,
    content,
    frontMatter: { title, image, date, author, description, tags },
  },
  authors,
}) {
  return (
    <>
      <article className="card post-card h-100 border-0 bg-transparent">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            <div className="ps-0 ps-lg-4 ms-0 ms-lg-3 mt-0 mt-lg-4">
              <div className="card-body">
                <ul className="card-meta list-inline mb-3">
                  <li className="list-inline-item mt-2">
                    <i className="me-2">
                      <IconCalendarEvent size={18} />
                    </i>
                    <span>{formatDate(date)}</span>
                  </li>
                  <li className="list-inline-item mt-2">—</li>
                  <li className="list-inline-item mt-2">
                    <i className="me-2">
                      <IconClock size={18} />
                    </i>
                    <span>{readingTime(content)} min read</span>
                  </li>
                </ul>

                <Link href={`/blog/${slug}`}>
                  <a className="d-block" title={title}>
                    <h3 className="post-title mb-3">{title}</h3>
                  </a>
                </Link>
                <p>{truncateString(description, 150)}</p>
              </div>
              <div className="card-footer border-top-0 bg-transparent p-0">
                <ul className="card-meta list-inline">
                  <li className="list-inline-item mt-2">
                    <Link
                      href={`/author/${author
                        .replace(/ /g, "-")
                        .toLowerCase()}`}
                    >
                      <a
                        className="card-meta-author"
                        title={`Read all posts by - ${author}`}
                      >
                        <i className="d-inline-block fst-normal">
                          <em>taken from</em> <em>{author.split(" ")[0]}</em>
                        </i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-4"></hr>

          </div>
        </div>
      </article>
    </>
  );
}
