
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, MessageSquare, Search, Shield, TrendingUp, Users, Zap } from "lucide-react";
import FactChecker from "@/components/FactChecker";
import DebateRoom from "@/components/DebateRoom";
import TruthDashboard from "@/components/TruthDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI Fact Checker",
      description: "Verify news claims with real-time AI analysis and credible sources",
      color: "text-blue-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Public Debates",
      description: "Engage in structured, AI-moderated debates on important topics",
      color: "text-green-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Truth Validation",
      description: "Evidence-based scoring system for claims and arguments",
      color: "text-purple-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Credibility Tracking",
      description: "User validation levels based on accuracy and reasoning quality",
      color: "text-orange-500"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'fact-checker':
        return <FactChecker />;
      case 'debates':
        return <DebateRoom />;
      case 'dashboard':
        return <TruthDashboard />;
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">AI-Powered Truth Discovery</span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                TruthNet
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The future of information verification. Harness AI to fact-check news, engage in evidence-based debates, 
                and build collective truth through structured reasoning and real-time validation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button 
                  onClick={() => setActiveTab('fact-checker')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Start Fact-Checking
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveTab('debates')}
                  className="border-2 border-blue-200 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
                >
                  Join Debates
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80">
                  <CardHeader className="text-center">
                    <div className={`mx-auto ${feature.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25,847</div>
                  <div className="text-gray-600">Claims Verified</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">1,293</div>
                  <div className="text-gray-600">Active Debates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Recent Truth Discoveries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { claim: "New renewable energy policy reduces emissions by 40%", status: "verified", score: 87 },
                    { claim: "Social media usage linked to productivity decline", status: "partially-true", score: 64 },
                    { claim: "AI breakthrough in medical diagnosis announced", status: "verified", score: 92 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{item.claim}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={item.status === 'verified' ? 'default' : 'secondary'} className="capitalize">
                          {item.status.replace('-', ' ')}
                        </Badge>
                        <div className="text-sm font-semibold text-blue-600">{item.score}%</div>
                        {item.status === 'verified' ? 
                          <CheckCircle className="w-5 h-5 text-green-500" /> : 
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">TruthNet</span>
            </div>
            <div className="flex space-x-1">
              {[
                { id: 'home', label: 'Home', icon: <Users className="w-4 h-4" /> },
                { id: 'fact-checker', label: 'Fact Check', icon: <Search className="w-4 h-4" /> },
                { id: 'debates', label: 'Debates', icon: <MessageSquare className="w-4 h-4" /> },
                { id: 'dashboard', label: 'Dashboard', icon: <TrendingUp className="w-4 h-4" /> }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 transition-all duration-200 ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
