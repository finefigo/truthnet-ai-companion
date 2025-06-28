
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, CheckCircle, XCircle, AlertTriangle, ExternalLink, Loader2 } from "lucide-react";

const FactChecker = () => {
  const [claim, setClaim] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleFactCheck = async () => {
    if (!claim.trim()) return;
    
    setIsChecking(true);
    
    // Simulate AI fact-checking process
    setTimeout(() => {
      const mockResult = {
        verdict: Math.random() > 0.5 ? 'True' : Math.random() > 0.5 ? 'Partially True' : 'False',
        score: Math.floor(Math.random() * 100),
        explanation: "Based on analysis of current data and verified sources, this claim has been evaluated for accuracy and context.",
        sources: [
          { title: "Reuters News Analysis", url: "#", domain: "reuters.com" },
          { title: "Government Official Statement", url: "#", domain: "gov.in" },
          { title: "Expert Opinion Research", url: "#", domain: "nature.com" }
        ]
      };
      setResult(mockResult);
      setIsChecking(false);
    }, 2000);
  };

  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case 'True': return 'text-green-600 bg-green-50 border-green-200';
      case 'False': return 'text-red-600 bg-red-50 border-red-200';
      case 'Partially True': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getVerdictIcon = (verdict) => {
    switch (verdict) {
      case 'True': return <CheckCircle className="w-5 h-5" />;
      case 'False': return <XCircle className="w-5 h-5" />;
      case 'Partially True': return <AlertTriangle className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">AI Fact Checker</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Submit any news claim or statement for real-time AI-powered verification with credible sources
        </p>
      </div>

      <Card className="max-w-4xl mx-auto border-0 bg-white/70 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-6 h-6 text-blue-600" />
            <span>Enter Your Claim</span>
          </CardTitle>
          <CardDescription>
            Paste a news headline, statement, or claim you'd like to verify
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Textarea
            placeholder="Example: 'India will ban diesel vehicles from 2026' or 'New study shows coffee reduces heart disease risk by 30%'"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            className="min-h-24 text-lg border-2 border-gray-200 focus:border-blue-400 transition-colors"
          />
          
          <Button 
            onClick={handleFactCheck}
            disabled={!claim.trim() || isChecking}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold transition-all duration-300"
          >
            {isChecking ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing Claim...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Fact Check This Claim
              </>
            )}
          </Button>

          {result && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className={`p-6 rounded-xl border-2 ${getVerdictColor(result.verdict)}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getVerdictIcon(result.verdict)}
                    <span className="text-2xl font-bold">{result.verdict}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{result.score}%</div>
                    <div className="text-sm opacity-75">Truth Score</div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{result.explanation}</p>
              </div>

              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Verified Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {result.sources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <div>
                          <div className="font-semibold text-gray-800">{source.title}</div>
                          <div className="text-sm text-gray-500">{source.domain}</div>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center space-x-1">
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Fact Checks */}
      <Card className="max-w-4xl mx-auto border-0 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Fact Checks</CardTitle>
          <CardDescription>See what others have been verifying</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { claim: "Electric vehicle sales increased by 300% this year", verdict: "Partially True", score: 72 },
              { claim: "New AI model passes medical licensing exam", verdict: "True", score: 94 },
              { claim: "Climate change causes increase in natural disasters", verdict: "True", score: 89 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-1 mr-4">
                  <p className="text-gray-800 font-medium">{item.claim}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getVerdictColor(item.verdict)}>
                    {item.verdict}
                  </Badge>
                  <div className="text-lg font-bold text-blue-600">{item.score}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FactChecker;
