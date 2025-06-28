
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Users, ThumbsUp, ThumbsDown, Shield, Send, Plus } from "lucide-react";

const DebateRoom = () => {
  const [selectedDebate, setSelectedDebate] = useState(null);
  const [newArgument, setNewArgument] = useState('');
  const [selectedSide, setSelectedSide] = useState('A');

  const debates = [
    {
      id: 1,
      topic: "Should social media platforms be regulated by government?",
      participants: 24,
      arguments: 47,
      sideA: { title: "Yes, Regulate", count: 12 },
      sideB: { title: "No, Keep Free", count: 12 },
      status: "active"
    },
    {
      id: 2,
      topic: "Is artificial intelligence a threat to job security?",
      participants: 18,
      arguments: 33,
      sideA: { title: "Yes, Threatens Jobs", count: 9 },
      sideB: { title: "No, Creates Jobs", count: 9 },
      status: "active"
    },
    {
      id: 3,
      topic: "Should renewable energy be prioritized over economic growth?",
      participants: 31,
      arguments: 62,
      sideA: { title: "Environment First", count: 16 },
      sideB: { title: "Economy First", count: 15 },
      status: "trending"
    }
  ];

  const arguments = [
    {
      id: 1,
      side: 'A',
      user: 'PolicyExpert',
      validationLevel: 87,
      argument: "Government regulation is essential for protecting user privacy and preventing the spread of misinformation. The current self-regulation model has proven insufficient.",
      evidence: "EU GDPR implementation resulted in 70% reduction in data breaches",
      aiScore: 89,
      votes: 23
    },
    {
      id: 2,
      side: 'B',
      user: 'TechAdvocate',
      validationLevel: 92,
      argument: "Free market innovation has driven technological progress. Government oversight could stifle creativity and slow down beneficial developments in social platforms.",
      evidence: "Historical analysis of tech regulation impact on innovation rates",
      aiScore: 81,
      votes: 19
    },
    {
      id: 3,
      side: 'A',
      user: 'CivilRights',
      validationLevel: 78,
      argument: "Without proper oversight, social media algorithms can manipulate public opinion and democratic processes, as evidenced in recent elections.",
      evidence: "MIT study on algorithm bias in political content distribution",
      aiScore: 85,
      votes: 31
    }
  ];

  const handleJoinDebate = (debate) => {
    setSelectedDebate(debate);
  };

  const handleSubmitArgument = () => {
    if (!newArgument.trim()) return;
    
    // Simulate AI validation
    console.log(`Submitting argument for side ${selectedSide}: ${newArgument}`);
    setNewArgument('');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Public Debate Arena</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Engage in structured, AI-moderated debates on important topics with evidence-based arguments
        </p>
      </div>

      {!selectedDebate ? (
        <>
          {/* Active Debates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {debates.map((debate) => (
              <Card key={debate.id} className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={debate.status === 'trending' ? 'default' : 'secondary'} className="capitalize">
                      {debate.status}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{debate.participants}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {debate.topic}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{debate.sideA.count}</div>
                      <div className="text-sm text-gray-600">{debate.sideA.title}</div>
                    </div>
                    <div className="text-center text-gray-400">
                      <MessageSquare className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-sm">{debate.arguments} args</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{debate.sideB.count}</div>
                      <div className="text-sm text-gray-600">{debate.sideB.title}</div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleJoinDebate(debate)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300"
                  >
                    Join Debate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create New Debate */}
          <Card className="max-w-2xl mx-auto border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5 text-green-600" />
                <span>Start New Debate</span>
              </CardTitle>
              <CardDescription>
                Propose a new topic for public discussion and evidence-based debate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="Enter your debate topic (e.g., 'Should universal basic income be implemented?')"
                className="text-lg border-2 border-gray-200 focus:border-blue-400"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Side A position" className="border-green-200 focus:border-green-400" />
                <Input placeholder="Side B position" className="border-red-200 focus:border-red-400" />
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                Create Debate Room
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        /* Selected Debate View */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => setSelectedDebate(null)}>
              ← Back to Debates
            </Button>
            <Badge variant="default">Live Debate</Badge>
          </div>

          <Card className="border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">{selectedDebate.topic}</CardTitle>
              <CardDescription className="flex items-center justify-between pt-2">
                <span>{selectedDebate.participants} participants • {selectedDebate.arguments} arguments</span>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">AI Moderated</span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Side Selection */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={selectedSide === 'A' ? 'default' : 'outline'}
              onClick={() => setSelectedSide('A')}
              className={`p-6 h-auto flex-col space-y-2 ${selectedSide === 'A' ? 'bg-green-600 hover:bg-green-700' : 'border-green-200 hover:bg-green-50'}`}
            >
              <div className="text-lg font-semibold">{selectedDebate.sideA.title}</div>
              <div className="text-2xl font-bold">{selectedDebate.sideA.count} supporters</div>
            </Button>
            <Button
              variant={selectedSide === 'B' ? 'default' : 'outline'}
              onClick={() => setSelectedSide('B')}
              className={`p-6 h-auto flex-col space-y-2 ${selectedSide === 'B' ? 'bg-red-600 hover:bg-red-700' : 'border-red-200 hover:bg-red-50'}`}
            >
              <div className="text-lg font-semibold">{selectedDebate.sideB.title}</div>
              <div className="text-2xl font-bold">{selectedDebate.sideB.count} supporters</div>
            </Button>
          </div>

          {/* Argument Input */}
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">
                Submit Your Argument - Side {selectedSide}: {selectedSide === 'A' ? selectedDebate.sideA.title : selectedDebate.sideB.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Present your evidence-based argument..."
                value={newArgument}
                onChange={(e) => setNewArgument(e.target.value)}
                className="min-h-24 border-2 border-gray-200 focus:border-blue-400"
              />
              <Input placeholder="Add supporting evidence or source (optional)" className="border-gray-200 focus:border-blue-400" />
              <Button 
                onClick={handleSubmitArgument}
                disabled={!newArgument.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Argument for AI Validation
              </Button>
            </CardContent>
          </Card>

          {/* Arguments Feed */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Live Arguments</h3>
            {arguments.map((arg) => (
              <Card key={arg.id} className={`border-l-4 ${arg.side === 'A' ? 'border-l-green-500 bg-green-50/50' : 'border-l-red-500 bg-red-50/50'} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Badge variant={arg.side === 'A' ? 'default' : 'destructive'} className="px-3 py-1">
                        Side {arg.side}
                      </Badge>
                      <span className="font-semibold text-gray-800">{arg.user}</span>
                      <Badge variant="outline" className="text-xs">
                        Trust Level: {arg.validationLevel}%
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">AI Score: {arg.aiScore}%</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 mb-3 leading-relaxed">{arg.argument}</p>
                  
                  {arg.evidence && (
                    <div className="bg-white/60 p-3 rounded-lg border border-gray-200 mb-4">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Supporting Evidence:</div>
                      <div className="text-sm text-gray-700">{arg.evidence}</div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-green-600 hover:text-green-700">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{arg.votes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-red-600 hover:text-red-700">
                        <ThumbsDown className="w-4 h-4" />
                        <span>3</span>
                      </Button>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      Validated by AI
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DebateRoom;
