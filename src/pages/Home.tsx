import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Globe,
  Microscope
} from 'lucide-react';
import heroImage from '@/assets/hero-campus.jpg';

const Home = () => {
  const stats = [
    { label: 'Students Enrolled', value: '25,000+', icon: Users },
    { label: 'Academic Programs', value: '150+', icon: BookOpen },
    { label: 'Faculty Members', value: '800+', icon: GraduationCap },
    { label: 'Research Projects', value: '200+', icon: Microscope },
  ];

  const quickLinks = [
    {
      title: 'Apply Now',
      description: 'Start your academic journey',
      href: '/admissions/apply',
      icon: GraduationCap,
      variant: 'primary' as const,
    },
    {
      title: 'Programs',
      description: 'Explore degree programs',
      href: '/departments',
      icon: BookOpen,
      variant: 'secondary' as const,
    },
    {
      title: 'News & Events',
      description: 'Latest updates',
      href: '/news',
      icon: Calendar,
      variant: 'outline' as const,
    },
  ];

  const upcomingEvents = [
    {
      date: '2024-03-15',
      title: 'Spring Convocation 2024',
      time: '10:00 AM',
      location: 'Main Auditorium',
    },
    {
      date: '2024-03-20',
      title: 'International Research Conference',
      time: '9:00 AM',
      location: 'Conference Hall',
    },
    {
      date: '2024-03-25',
      title: 'Industry Partnership Summit',
      time: '2:00 PM',
      location: 'Business Center',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Alumni, Computer Science',
      quote: 'AWKUM provided me with the foundation and opportunities that shaped my successful career in technology.',
      rating: 5,
    },
    {
      name: 'Mohammad Hassan',
      role: 'Current Student, Business Administration',
      quote: 'The quality of education and support from faculty has exceeded my expectations.',
      rating: 5,
    },
    {
      name: 'Prof. Ali Khan',
      role: 'Faculty, Engineering',
      quote: 'AWKUM fosters an environment of innovation and research excellence.',
      rating: 5,
    },
  ];

  const featuredNews = [
    {
      date: '2024-03-10',
      title: 'AWKUM Ranks Among Top 10 Universities in Pakistan',
      excerpt: 'Latest HEC rankings place AWKUM in the top tier of Pakistani universities.',
      category: 'Achievement',
    },
    {
      date: '2024-03-08',
      title: 'New Partnership with International Tech Giants',
      excerpt: 'Strategic partnerships with leading technology companies for student internships.',
      category: 'Partnership',
    },
    {
      date: '2024-03-05',
      title: 'Research Grant Worth $2M Awarded',
      excerpt: 'Faculty secures major research funding for climate change studies.',
      category: 'Research',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Icon Test - Remove this after verification */}
      <div className="fixed top-4 right-4 z-50 bg-white p-2 rounded shadow-lg border">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-blue-500" />
          <GraduationCap className="h-4 w-4 text-green-500" />
          <Award className="h-4 w-4 text-yellow-500" />
          <span>Icons Test</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Excellence in
            <span className="block text-gradient text-secondary"> Higher Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Abdul Wali Khan University Mardan - Empowering minds, fostering innovation, 
            and building the future leaders of Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-secondary text-lg px-8 py-6 h-auto">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quick Access</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with the most important information and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="card-elevated group cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    link.variant === 'primary' ? 'bg-gradient-to-br from-primary to-primary-light' :
                    link.variant === 'secondary' ? 'bg-secondary' : 'bg-muted'
                  }`}>
                    <link.icon className={`h-8 w-8 ${
                      link.variant === 'primary' ? 'text-white' :
                      link.variant === 'secondary' ? 'text-secondary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl">{link.title}</CardTitle>
                  <CardDescription className="text-lg">{link.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className={`w-full ${
                      link.variant === 'primary' ? 'btn-primary' :
                      link.variant === 'secondary' ? 'btn-secondary' : ''
                    }`}
                    variant={link.variant === 'outline' ? 'outline' : 'default'}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Latest News</h2>
              <p className="text-xl text-muted-foreground">Stay updated with the latest happenings at AWKUM</p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <Card key={index} className="card-elevated">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{news.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-light">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us for these exciting events and activities happening at our campus
              </p>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-surface-elevated transition-colors">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs text-primary font-medium">
                        {new Date(event.date).toLocaleDateString('en', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-6" variant="outline">
                View All Events
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Testimonials */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">What People Say</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join AWKUM?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step towards your academic and professional success. 
            Apply now and become part of our vibrant learning community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-secondary text-lg px-8 py-6 h-auto">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;