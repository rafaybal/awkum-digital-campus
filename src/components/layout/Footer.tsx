import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About AWKUM', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Academic Calendar', href: '/calendar' },
    { name: 'Student Services', href: '/services' },
    { name: 'Library', href: '/library' },
    { name: 'Career Services', href: '/careers' },
  ];

  const academicLinks = [
    { name: 'Undergraduate Programs', href: '/programs/undergraduate' },
    { name: 'Graduate Programs', href: '/programs/graduate' },
    { name: 'Research Centers', href: '/research/centers' },
    { name: 'Faculty Directory', href: '/faculty' },
    { name: 'Academic Departments', href: '/departments' },
    { name: 'Online Learning', href: '/online' },
  ];

  const studentLinks = [
    { name: 'Student Portal', href: '/student-portal' },
    { name: 'Course Registration', href: '/registration' },
    { name: 'Fee Payment', href: '/fees' },
    { name: 'Transcript Request', href: '/transcripts' },
    { name: 'Student Handbook', href: '/handbook' },
    { name: 'Campus Life', href: '/campus-life' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Connected with AWKUM</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest news, events, and updates from Abdul Wali Khan University Mardan
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="btn-secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-bold text-lg">AWKUM</div>
                <div className="text-sm text-primary-foreground/80">Excellence in Education</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Abdul Wali Khan University Mardan is committed to providing world-class education 
              and fostering innovation, research, and academic excellence in Pakistan.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Garden Campus, Abdul Wali Khan University, Mardan, Khyber Pakhtunkhwa, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">+92-937-761013</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">info@awkum.edu.pk</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Academics</h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Student Resources</h4>
            <ul className="space-y-2 mb-6">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>© 2024 Abdul Wali Khan University Mardan. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;