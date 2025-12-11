import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { toast } from "sonner";
import { FileDown, CheckCircle, ClipboardList, CreditCard, Calendar } from "lucide-react";

const requirements = [
  "Birth certificate (original and copy)",
  "Passport-size photos (4)",
  "Previous school report (if applicable)",
  "Immunization records",
  "Parent/Guardian ID copy",
];

const feeStructure = [
  { level: "Pre-Primary 1 (PP1)", tuition: "KES 45,000", lunch: "KES 15,000", total: "KES 60,000" },
  { level: "Pre-Primary 2 (PP2)", tuition: "KES 48,000", lunch: "KES 15,000", total: "KES 63,000" },
  { level: "Grade 1", tuition: "KES 52,000", lunch: "KES 15,000", total: "KES 67,000" },
  { level: "Grade 2", tuition: "KES 54,000", lunch: "KES 15,000", total: "KES 69,000" },
  { level: "Grade 3", tuition: "KES 56,000", lunch: "KES 15,000", total: "KES 71,000" },
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We will contact you soon.");
    setFormData({
      childName: "",
      dob: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 hero-gradient">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Join the Achievers Academy family and give your child the best start
          </p>
        </div>
        <WaveDivider variant="card" />
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-card">
        <div className="container">
          <SectionHeader 
            title="Admission Process" 
            subtitle="Simple steps to enroll your child"
          />
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto -mt-6 mb-4 text-sm font-bold">1</div>
              <h3 className="font-bold text-foreground mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">Fill out the online form or download PDF</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto -mt-6 mb-4 text-sm font-bold">2</div>
              <h3 className="font-bold text-foreground mb-2">Schedule Assessment</h3>
              <p className="text-sm text-muted-foreground">Meet with our admissions team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto -mt-6 mb-4 text-sm font-bold">3</div>
              <h3 className="font-bold text-foreground mb-2">Receive Confirmation</h3>
              <p className="text-sm text-muted-foreground">Acceptance letter within 5 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-coral text-primary-foreground rounded-full flex items-center justify-center mx-auto -mt-6 mb-4 text-sm font-bold">4</div>
              <h3 className="font-bold text-foreground mb-2">Complete Enrollment</h3>
              <p className="text-sm text-muted-foreground">Pay fees and submit documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Requirements" centered={false} />
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="gap-2">
                  <FileDown className="w-4 h-4" />
                  Download Application Form (PDF)
                </Button>
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <SectionHeader title="Fee Structure" subtitle="Per term (3 terms per year)" centered={false} />
              <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Level</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold">Total/Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 text-sm text-foreground">{item.level}</td>
                        <td className="px-4 py-3 text-sm text-right font-semibold text-primary">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                * Fees include tuition, lunch, and learning materials. Uniform and transport are separate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-card">
        <div className="container max-w-3xl">
          <SectionHeader 
            title="Online Application" 
            subtitle="Fill out the form below to start your child's journey with us"
          />
          <form onSubmit={handleSubmit} className="bg-muted rounded-3xl p-8 shadow-soft">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="childName">Child's Full Name *</Label>
                <Input
                  id="childName"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Applying for Grade *</Label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  required
                  className="w-full h-11 px-3 rounded-xl border border-input bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select grade</option>
                  <option value="pp1">Pre-Primary 1</option>
                  <option value="pp2">Pre-Primary 2</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">Home Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-card"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any special needs, previous school experience, or questions..."
                  className="bg-card min-h-[100px]"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button type="submit" size="lg">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
