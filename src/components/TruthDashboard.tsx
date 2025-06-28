
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Award, CheckCircle, MessageSquare, Target, Users } from "lucide-react";

const TruthDashboard = () => {
  const userStats = {
    validationLevel: 87,
    totalClaims: 23,
    verifiedClaims: 20,
    debatesParticipated: 12,
    argumentsSubmitted: 34,
    accuracyRate: 89,
    trustScore: 92
  };

  const recentActivity = [
    { type: 'fact-check', claim: 'Climate change statistics verification', result: 'True', score: 94, time: '2 hours ago' },
    { type: 'debate', topic: 'AI regulation discussion', side: 'A', score: 87, time: '5 hours ago' },
    { type: 'fact-check', claim: 'Economic growth data analysis', result: 'Partially True', score: 72, time: '1 day ago' },
    { type: 'debate', topic: 'Social media impact study', side: 'B', score: 91, time: '2 days ago' }
  ];

  const achievements = [
    { title: 'Truth Seeker', description: 'Verified 20+ claims', icon: <CheckCircle className="w-6 h-6" />, earned: true },
    { title: 'Debate Champion', description: 'Won 5 structured debates', icon: <Award className="w-6 h-6" />, earned: true },
    { title: 'Fact Master', description: '90%+ accuracy rate', icon: <Target className="w-6 h-6" />, earned: true },
    { title: 'Community Leader', description: 'Help 100+ users', icon: <Users className="w-6 h-6" />, earned: false }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Truth Dashboard</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Track your validation level, fact-checking accuracy, and debate contributions
        </p>
      </div>

      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Validation Level</p>
                <p className="text-3xl font-bold text-blue-700">{userStats.validationLevel}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <Progress value={userStats.validationLevel} className="mt-4" />
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Accuracy Rate</p>
                <p className="text-3xl font-bold text-green-700">{userStats.accuracyRate}%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-sm text-green-600 mt-2">{userStats.verifiedClaims}/{userStats.totalClaims} claims verified</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Debates Won</p>
                <p className="text-3xl font-bold text-purple-700">8</p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-sm text-purple-600 mt-2">{userStats.debatesParticipated} total participated</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Trust Score</p>
                <p className="text-3xl font-bold text-orange-700">{userStats.trustScore}</p>
              </div>
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-sm text-orange-600 mt-2">Community rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Validation Progress */}
        <Card className="border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Validation Progress</CardTitle>
            <CardDescription>Your journey to becoming a trusted truth validator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Novice Validator</span>
                <span className="text-sm text-gray-500">Completed</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Skilled Analyst</span>
                <span className="text-sm text-gray-500">87% Complete</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Expert Validator</span>
                <span className="text-sm text-gray-500">42% Complete</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Truth Master</span>
                <span className="text-sm text-gray-500">Not Started</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Recognition for your contributions to truth discovery</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                achievement.earned 
                  ? 'border-green-200 bg-green-50 text-green-800' 
                  : 'border-gray-200 bg-gray-50 text-gray-500'
              }`}>
                <div className={achievement.earned ? 'text-green-600' : 'text-gray-400'}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm opacity-75">{achievement.description}</div>
                </div>
                {achievement.earned && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Earned
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-0 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest fact-checks and debate contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'fact-check' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {activity.type === 'fact-check' ? <CheckCircle className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {activity.type === 'fact-check' ? activity.claim : activity.topic}
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {activity.result && (
                    <Badge variant={activity.result === 'True' ? 'default' : 'secondary'}>
                      {activity.result}
                    </Badge>
                  )}
                  {activity.side && (
                    <Badge variant="outline">Side {activity.side}</Badge>
                  )}
                  <div className="text-lg font-bold text-blue-600">{activity.score}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TruthDashboard;
