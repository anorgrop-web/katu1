import Image from "next/image"

export default function ExpertSection() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Expert Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">A Escolha dos Chefs</h2>

            <p className="text-lg text-gray-600 mb-8">A preferência de profissionais da culinária</p>

            <div className="text-gray-700 leading-relaxed mb-8">
              <p>
                Com décadas de experiência na culinária profissional, sabemos a importância da precisão e da limpeza em
                cada refeição. Uma faca cega ou uma superfície inadequada podem comprometer não apenas o prato, mas toda
                a experiência. Tábuas de corte tradicionais simplesmente não atendem aos padrões mais exigentes.
                Motivados pelo compromisso com a qualidade, desenvolvemos a tábua de corte Katuchef. Feita de titânio
                puro, a Katuchef possui superfície higiênica não porosa, não danifica facas e foi projetada para durar
                muito tempo, seja cozinhando em casa ou em uma cozinha profissional.
              </p>
            </div>
          </div>

          {/* Chef Photo */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/kat/lp/RXhwZXJ0LTUuanBn.jpg"
                alt="Chef profissional usando Katuchef"
                width={384}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
