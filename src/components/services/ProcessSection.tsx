
import React from 'react';

const ProcessSection: React.FC = () => {
  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Initial meeting to understand your requirements' },
    { step: '02', title: 'Design & Planning', description: 'Detailed blueprints and project planning' },
    { step: '03', title: 'Approval & Permits', description: 'Handle all necessary approvals and permits' },
    { step: '04', title: 'Construction', description: 'Execute the project with regular updates' },
    { step: '05', title: 'Handover', description: 'Quality check and project handover' }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to deliver your project on time and within budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
