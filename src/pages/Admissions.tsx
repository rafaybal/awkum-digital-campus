import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap,
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Download,
  ArrowRight,
  Clock,
  Users,
  Award,
  AlertCircle
} from 'lucide-react';

const Admissions = () => {
  const programs = {
    undergraduate: [
      { name: 'Computer Science', duration: '4 years', fee: 'Rs. 120,000/year', seats: '120' },
      { name: 'Business Administration', duration: '4 years', fee: 'Rs. 100,000/year', seats: '150' },
      { name: 'Engineering', duration: '4 years', fee: 'Rs. 150,000/year', seats: '100' },
      { name: 'Social Sciences', duration: '4 years', fee: 'Rs. 80,000/year', seats: '80' },
    ],
    graduate: [
      { name: 'MS Computer Science', duration: '2 years', fee: 'Rs. 150,000/year', seats: '60' },
      { name: 'MBA', duration: '2 years', fee: 'Rs. 180,000/year', seats: '80' },
      { name: 'MS Engineering', duration: '2 years', fee: 'Rs. 170,000/year', seats: '50' },
      { name: 'PhD Programs', duration: '3-5 years', fee: 'Rs. 200,000/year', seats: '40' },
    ],
  };

  const eligibilityRequirements = {
    undergraduate: [
      'FSc/A-Level with minimum 60% marks',
      'Valid entry test score (AWKUM Entry Test)',
      'Pakistani nationality or equivalent status',
      'Medical fitness certificate',
    ],
    graduate: [
      'Bachelor\'s degree with minimum 2.5 CGPA',
      'Valid GRE/GAT General score',
      'Two academic references',
      'Statement of purpose',
      'English proficiency (IELTS/TOEFL for international students)',
    ],
  };

  const applicationProcess = [
    {
      step: '01',
      title: 'Online Registration',
      description: 'Create your account and fill out the application form',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Document Upload',
      description: 'Upload required documents and certificates',
      icon: Upload,
    },
    {
      step: '03',
      title: 'Fee Payment',
      description: 'Pay application fee through online banking',
      icon: DollarSign,
    },
    {
      step: '04',
      title: 'Entry Test',
      description: 'Appear in the university entry test',
      icon: Award,
    },
    {
      step: '05',
      title: 'Merit List',
      description: 'Check your name in the merit list',
      icon: CheckCircle,
    },
  ];

  const importantDates = [
    { event: 'Application Start Date', date: 'March 1, 2024', status: 'active' },
    { event: 'Application Deadline', date: 'May 15, 2024', status: 'upcoming' },
    { event: 'Entry Test Date', date: 'June 10, 2024', status: 'upcoming' },
    { event: 'Merit List Release', date: 'June 20, 2024', status: 'upcoming' },
    { event: 'Admission Confirmation', date: 'June 30, 2024', status: 'upcoming' },
  ];

  const downloadableForms = [
    { name: 'Application Form', type: 'PDF', size: '2.5 MB' },
    { name: 'Admission Prospectus', type: 'PDF', size: '15 MB' },
    { name: 'Fee Structure', type: 'PDF', size: '1.2 MB' },
    { name: 'Hostel Application', type: 'PDF', size: '0.8 MB' },
    { name: 'Scholarship Application', type: 'PDF', size: '1.5 MB' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Start your journey towards academic excellence at Abdul Wali Khan University Mardan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="btn-secondary">
                Apply Online Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Prospectus
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Important Dates</h2>
            <p className="text-xl text-muted-foreground">Don't miss these crucial admission deadlines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {importantDates.map((item, index) => (
              <Card key={index} className={`card-elevated ${item.status === 'active' ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-2">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{item.event}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="font-semibold text-primary">{item.date}</p>
                  {item.status === 'active' && (
                    <Badge variant="default" className="mt-2">Active</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
            <p className="text-xl text-muted-foreground">Explore our comprehensive range of degree programs</p>
          </div>
          
          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
              <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.undergraduate.map((program, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {program.name}
                      </CardTitle>
                      <CardDescription>Bachelor's Degree Program</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fee:</span>
                          <span className="font-medium">{program.fee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Seats:</span>
                          <span className="font-medium">{program.seats}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="graduate" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.graduate.map((program, index) => (
                  <Card key={index} className="card-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        {program.name}
                      </CardTitle>
                      <CardDescription>Graduate Degree Program</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fee:</span>
                          <span className="font-medium">{program.fee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Seats:</span>
                          <span className="font-medium">{program.seats}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground">Follow these simple steps to apply for admission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {applicationProcess.map((step, index) => (
              <div key={index} className="relative">
                {index < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-2"></div>
                )}
                <Card className="card-elevated text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Eligibility Requirements</h2>
            <p className="text-xl text-muted-foreground">Make sure you meet the admission criteria</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Undergraduate Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityRequirements.undergraduate.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Graduate Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityRequirements.graduate.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-16 bg-surface-elevated">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Download Forms</h2>
            <p className="text-xl text-muted-foreground">Get all the necessary forms and documents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {downloadableForms.map((form, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{form.name}</h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    <span>{form.type} • {form.size}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who have chosen AWKUM for their higher education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-secondary">
              Apply Online Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Admissions Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Upload component for demo
const Upload = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Admissions;