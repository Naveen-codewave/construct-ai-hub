
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Users, FileText, BarChart3, Plus, Bell, Settings, LogOut } from 'lucide-react';

// Mock user data - in real app, this would come from auth context
const mockUser = {
  role: 'project_owner', // 'general', 'project_owner', 'head_engineer', 'site_engineer', 'admin'
  name: 'John Doe',
  phone: '+1 (555) 123-4567'
};

const DashboardPage = () => {
  const [user] = useState(mockUser);

  const projects = [
    {
      id: 1,
      name: 'Modern Villa Construction',
      location: 'Beverly Hills, CA',
      status: 'In Progress',
      progress: 65,
      stage: 'Structure',
      timeline: '8 months',
      teamMembers: 3
    },
    {
      id: 2,
      name: 'Office Complex Renovation',
      location: 'Downtown LA',
      status: 'Planning',
      progress: 25,
      stage: 'Planning',
      timeline: '12 months',
      teamMembers: 5
    }
  ];

  const constructionPlans = [
    { id: 1, title: '3BHK Modern Villa', category: 'Residential', views: 1250 },
    { id: 2, title: 'Contemporary Office Space', category: 'Commercial', views: 890 },
    { id: 3, title: 'Luxury Apartment Interior', category: 'Interior', views: 2100 },
    { id: 4, title: 'Sustainable Green Building', category: 'Eco-Friendly', views: 1580 }
  ];

  const renderUserDashboard = () => {
    switch (user.role) {
      case 'general':
        return <GeneralUserDashboard plans={constructionPlans} />;
      case 'project_owner':
        return <ProjectOwnerDashboard projects={projects} />;
      case 'head_engineer':
        return <HeadEngineerDashboard projects={projects} />;
      case 'site_engineer':
        return <SiteEngineerDashboard projects={projects} />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <GeneralUserDashboard plans={constructionPlans} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">ConstructAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">{user.role.replace('_', ' ').toUpperCase()}</Badge>
            <span className="text-sm font-medium">{user.name}</span>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>

        {renderUserDashboard()}
      </div>
    </div>
  );
};

// General User Dashboard Component
const GeneralUserDashboard = ({ plans }: { plans: any[] }) => (
  <Tabs defaultValue="explore" className="space-y-6">
    <TabsList>
      <TabsTrigger value="explore">Explore Plans</TabsTrigger>
      <TabsTrigger value="inspiration">Interior Inspiration</TabsTrigger>
      <TabsTrigger value="quality">Quality Standards</TabsTrigger>
    </TabsList>
    
    <TabsContent value="explore" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Construction Plan Templates</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Custom Project
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded mb-4"></div>
              <CardTitle className="text-lg">{plan.title}</CardTitle>
              <CardDescription>{plan.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{plan.views} views</Badge>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
    
    <TabsContent value="inspiration">
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Interior Design Gallery</h3>
        <p className="text-muted-foreground">Discover beautiful interior designs and get inspired for your next project.</p>
      </div>
    </TabsContent>
    
    <TabsContent value="quality">
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">Quality Checklists</h3>
        <p className="text-muted-foreground">Access our comprehensive construction quality standards and checklists.</p>
      </div>
    </TabsContent>
  </Tabs>
);

// Project Owner Dashboard Component
const ProjectOwnerDashboard = ({ projects }: { projects: any[] }) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          <Building className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{projects.length}</div>
          <p className="text-xs text-muted-foreground">All your construction projects</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {projects.reduce((sum, p) => sum + p.teamMembers, 0)}
          </div>
          <p className="text-xs text-muted-foreground">Engineers assigned</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
          </div>
          <p className="text-xs text-muted-foreground">Across all projects</p>
        </CardContent>
      </Card>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.location}</CardDescription>
              </div>
              <Badge variant={project.status === 'In Progress' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Current Stage: {project.stage}</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Timeline: {project.timeline}</span>
                <span>Team: {project.teamMembers} members</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">View Details</Button>
                <Button variant="outline" size="sm">Daily Updates</Button>
                <Button variant="outline" size="sm">WhatsApp Group</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Head Engineer Dashboard Component
const HeadEngineerDashboard = ({ projects }: { projects: any[] }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">Engineering Dashboard</h2>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Create New Project
      </Button>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.location}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={project.progress} />
            <div className="flex justify-between text-sm">
              <span>Stage: {project.stage}</span>
              <span>{project.progress}% Complete</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Manage</Button>
              <Button variant="outline" size="sm">Blueprints</Button>
              <Button variant="outline" size="sm">Assign Engineers</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Site Engineer Dashboard Component
const SiteEngineerDashboard = ({ projects }: { projects: any[] }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Site Engineering Tasks</h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>Assigned Project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Button size="sm">Upload Daily Update</Button>
              <Button variant="outline" size="sm">Task Checklist</Button>
              <Button variant="outline" size="sm">Resources</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Admin Dashboard Component
const AdminDashboard = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Admin Control Panel</h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg">User Management</CardTitle>
          <CardDescription>Manage users and roles</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Manage Users</Button>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg">Project Control</CardTitle>
          <CardDescription>Create and manage projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Manage Projects</Button>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg">Reports</CardTitle>
          <CardDescription>Generate project reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">View Reports</Button>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg">Analytics</CardTitle>
          <CardDescription>Dashboard analytics</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">View Analytics</Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default DashboardPage;
