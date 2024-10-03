import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Code, Image, Video } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
  preview?: {
    type: 'image' | 'video' | 'component';
    content: string | React.ReactNode;
  };
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, title, preview }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderPreview = () => {
    if (!preview) return <p>No preview available</p>;

    switch (preview.type) {
      case 'image':
        return <img src={preview.content as string} alt="Preview" className="max-w-full h-auto" />;
      case 'video':
        return <video src={preview.content as string} controls className="max-w-full h-auto" />;
      case 'component':
        return preview.content;
      default:
        return <p>Unsupported preview type</p>;
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Tabs defaultValue="code">
          <div className="flex justify-between items-center border-b px-4 py-2">
            <TabsList>
              <TabsTrigger value="code">
                <Code className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
              {preview && (
                <TabsTrigger value="preview">
                  {preview.type === 'image' && <Image className="h-4 w-4 mr-2" />}
                  {preview.type === 'video' && <Video className="h-4 w-4 mr-2" />}
                  Preview
                </TabsTrigger>
              )}
            </TabsList>
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <TabsContent value="code" className="p-4">
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code className={`language-${language}`}>{code}</code>
            </pre>
          </TabsContent>
          {preview && (
            <TabsContent value="preview" className="p-4">
              <div className="bg-gray-100 p-4 rounded-md">
                {renderPreview()}
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeSnippet;