import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Lock",
    title: "Сквозное шифрование",
    desc: "Все сообщения защищены end-to-end. Никто — даже мы — не может их прочитать.",
  },
  {
    icon: "Zap",
    title: "Без лимитов",
    desc: "Файлы любого размера, группы до миллиона человек, неограниченная история.",
  },
  {
    icon: "Globe",
    title: "Работает везде",
    desc: "Не блокируется провайдерами. Доступен в любой стране без VPN.",
  },
  {
    icon: "Shield",
    title: "Анонимность",
    desc: "Не нужен номер телефона. Регистрация по email или полностью анонимно.",
  },
];

export default function Featured() {
  return (
    <div
      id="features"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white"
    >
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="FreeChat — свобода общения"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">
          Почему FreeChat
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Мессенджер, который работает на тебя — а не против тебя.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <Icon name={f.icon} fallback="CircleAlert" size={24} className="text-neutral-900" />
              <h4 className="font-semibold text-neutral-900">{f.title}</h4>
              <p className="text-sm text-neutral-500 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}