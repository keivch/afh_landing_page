export default function Map() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden px-10 md:px-30 mb-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.222489337968!2d-76.28888082591357!3d3.536043850654373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04c0e3f71867%3A0xb00f10e2ace0cc36!2sAfh%20Metalmecanico!5e0!3m2!1ses!2sco!4v1755121093049!5m2!1ses!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      ;
    </div>
  );
}
