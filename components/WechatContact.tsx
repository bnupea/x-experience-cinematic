import Image from "next/image";

type WechatContactProps = {
  label: string;
  account: string;
  qr: string;
};

export function WechatContact({ label, account, qr }: WechatContactProps) {
  return (
    <div className="wechat-contact">
      <div className="wechat-contact-heading">
        <span>{label}</span>
        <strong>{account}</strong>
      </div>

      <a
        className="wechat-contact-qr"
        href={qr}
        target="_blank"
        rel="noreferrer"
        aria-label={`${label} ${account}`}
      >
        <Image
          src={qr}
          width={670}
          height={670}
          sizes="(max-width: 760px) min(72vw, 320px), 240px"
          alt={`${label} ${account}`}
          loading="lazy"
        />
      </a>
    </div>
  );
}
