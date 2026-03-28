import portfolioData from '@/data/portfolio.json'

export default function About() {
  const { about, experience, currentRole, highlights } = portfolioData

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {about}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-gradient rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text font-poppins">
                  {experience}+
                </div>
                <div className="text-gray-400 mt-2">Year Experience</div>
              </div>
              
              <div className="card-gradient rounded-xl p-6 text-center">
                <div className="text-xl font-semibold text-white mb-2">
                  Current Role
                </div>
                <div className="text-blue-400">{currentRole}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}