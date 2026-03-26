"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TagIcon } from "lucide-react";

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  color: string;
  time: string;
}

interface NewNoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (note: Note) => void;
}

export function NewNoteModal({
  open,
  onOpenChange,
  onSave,
}: NewNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const tags = [
    { name: "Work", color: "blue" },
    { name: "Personal", color: "purple" },
    { name: "Ideas", color: "green" },
    { name: "School", color: "orange" },
    { name: "Research", color: "pink" },
  ];

  const handleCreate = () => {
    if (!title.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim() || "AI analyzed and organized automatically...",
      tag: selectedTag || "Personal",
      color: tags.find((t) => t.name === selectedTag)?.color || "purple",
      time: "Just now",
    };

    onSave?.(newNote);
    onOpenChange(false);
    // Reset form
    setTitle("");
    setContent("");
    setSelectedTag("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#faf9f7] border-[#e0dedb] p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="p-6 border-b border-[#e0dedb] bg-gradient-to-b from-[#fbfaf9] to-[#f5f1ed]">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-[#37322f]">
              Create New Note
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title Input */}
          <div>
            <label
              htmlFor="note-title"
              className="block text-sm font-medium text-[#37322f] mb-2"
            >
              Title
            </label>
            <input
              id="note-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="w-full px-4 py-3 bg-white border border-[#e0dedb] rounded-lg text-[#37322f] placeholder:text-[#605a57]/50 focus:outline-none focus:ring-2 focus:ring-[#37322f]/20 transition-all"
            />
          </div>

          {/* Tag Selection */}
          <div>
            <label className="block text-sm font-medium text-[#37322f] mb-2">
              <TagIcon className="w-4 h-4 inline mr-1" />
              Tag
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.name}
                  onClick={() => setSelectedTag(tag.name)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedTag === tag.name
                      ? "bg-[#37322f] text-white"
                      : "bg-[#fbfaf9] text-[#37322f] border border-[#e0dedb] hover:bg-[#e0dedb]/50"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label
              htmlFor="note-content"
              className="block text-sm font-medium text-[#37322f] mb-2"
            >
              Content
            </label>
            <textarea
              id="note-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your note..."
              rows={10}
              className="w-full px-4 py-3 bg-white border border-[#e0dedb] rounded-lg text-[#37322f] placeholder:text-[#605a57]/50 focus:outline-none focus:ring-2 focus:ring-[#37322f]/20 transition-all resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#e0dedb] bg-[#fbfaf9] flex items-center justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-[#e0dedb] text-[#37322f] hover:bg-[#e0dedb]/50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!title.trim()}
            className="bg-[#37322f] hover:bg-[#37322f]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Note
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
