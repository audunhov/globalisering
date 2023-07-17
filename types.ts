export interface Button {
  _uid: string;
  text: string;
  style: "primary" | "secondary";
  link: {
    cached_url: string;
  };
}

export interface Image {
  filename: string;
  alt: string;
}
