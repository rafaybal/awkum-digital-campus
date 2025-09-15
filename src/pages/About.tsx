import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award,
  Users,
  BookOpen,
  Globe,
  TrendingUp,
  Heart,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2009', title: 'University Established', description: 'AWKUM was founded as a public sector university' },
    { year: '2012', title: 'First Graduates', description: 'Graduated the first batch of students' },
    { year: '2015', title: 'Research Excellence', description: 'Established major research centers' },
    { year: '2018', title: 'International Recognition', description: 'Gained international accreditation' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online learning platforms' },
    { year: '2024', title: 'Top 10 Ranking', description: 'Ranked among top 10 universities in Pakistan' },
  ];

  const leadership = [
    {
      name: 'Prof. Dr. Zahoor Ahmad Swati',
      position: 'Vice Chancellor',
      qualification: 'PhD in Computer Science',
      experience: '25+ years in academia',
    },
    {
      name: 'Prof. Dr. Muhammad Naeem',
      position: 'Pro Vice Chancellor',
      qualification: 'PhD in Management Sciences',
      experience: '20+ years in higher education',
    },
    {
      name: 'Dr. Sadia Malik',
      position: 'Registrar',
      qualification: 'PhD in Educational Administration',
      experience: '18+ years in university administration',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, research, and service to society.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and ethical conduct in all our endeavors.',
    },
    {
      icon: Users,
      title: 'Diversity',
      description: 'We embrace diversity and create an inclusive environment for all learners.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We prepare students to be responsible global citizens and leaders.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AWKUM</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Abdul Wali Khan University Mardan is committed to excellence in education, 
              research, and community service, fostering innovation and leadership for Pakistan's future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a world-class university that excels in teaching, research, and innovation, 
                  contributing to the socio-economic development of Pakistan and the global community 
                  through quality education and cutting-edge research.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide quality higher education, conduct innovative research, and serve society 
                  by developing skilled professionals, promoting critical thinking, and fostering 
                  entrepreneurship and leadership among our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do at AWKUM
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From establishment to excellence - the story of AWKUM's growth and achievements
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="card-elevated">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-sm">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        <CardDescription className="text-base">{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders guiding AWKUM towards excellence in higher education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">{leader.position}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{leader.qualification}</p>
                    <p>{leader.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-muted-foreground">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Programs Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Join the AWKUM Family</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Become part of our community of learners, researchers, and innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-secondary">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;