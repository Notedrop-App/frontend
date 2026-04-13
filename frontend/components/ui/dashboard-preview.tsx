"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/favicon.jpg";
import {
  FileText,
  Star,
  Users,
  Tag,
  Archive,
  Trash2,
  Search,
  Plus,
  Home,
  Settings,
  Bell,
} from "lucide-react";
import { NewNoteModal, type Note } from "@/components/ui/new-note-modal";
import { useState } from "react";

const defaultNotes: Note[] = [
  {
    id: "1",
    title: "Linux Setup Notes",
    tag: "Tech",
    color: "blue",
    time: "2h ago",
    content:
      "Installed yay for AUR packages. Set up zsh with starship prompt. Configured dotfiles repo with GNU Stow.",
  },
  {
    id: "2",
    title: "Weekly Goals",
    tag: "Personal",
    color: "blue",
    time: "5h ago",
    content:
      "Finish graph algorithms chapter. Review PR feedback. Call parents Sunday. Read 20 pages of Dune.",
  },
  {
    id: "3",
    title: "Calculus — Integrals",
    tag: "Study",
    color: "purple",
    time: "1d ago",
    content:
      "Integration by parts: ∫u dv = uv − ∫v du. Substitution rule. Practice: improper integrals, convergence tests.",
  },
  {
    id: "4",
    title: "Book Notes — Atomic Habits",
    tag: "Reading",
    color: "green",
    time: "2d ago",
    content:
      "1% better every day compounds to 37x in a year. Identity-based habits > outcome-based. Habit stacking technique.",
  },
  {
    id: "5",
    title: "Project — REST API",
    tag: "Dev",
    color: "blue",
    time: "3d ago",
    content:
      "Auth via JWT. Rate limiting with Redis. Use UUIDs for resource IDs. Write OpenAPI spec before implementing.",
  },
  {
    id: "6",
    title: "Recipe — Sourdough Bread",
    tag: "Personal",
    color: "purple",
    time: "1w ago",
    content:
      "100g starter, 400g flour, 300g water, 10g salt. Autolyse 1h. Stretch & fold 4x. Cold proof overnight.",
  },
];

export function DashboardPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState<Note[]>(defaultNotes);

  const handleSaveNote = (newNote: Note) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const getTagColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-700";
      case "purple":
        return "bg-purple-100 text-purple-700";
      case "green":
        return "bg-green-100 text-green-700";
      case "orange":
        return "bg-orange-100 text-orange-700";
      case "pink":
        return "bg-pink-100 text-pink-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="relative pb-16 hidden md:block">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="relative bg-white rounded-lg shadow-2xl border border-[#e0dedb] overflow-hidden">
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-[#fbfaf9] to-[#f5f1ed] border-r border-[#e0dedb] flex flex-col">
              <div className="p-6 border-b border-[#e0dedb]">
                <div className="flex items-center gap-2 mb-4">
                  <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
                  <span className="text-lg font-semibold text-[#37322f]">
                    Notedrop
                  </span>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#37322f] hover:bg-[#37322f]/90 text-white text-sm gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Note
                </Button>
              </div>

              <nav className="flex-1 p-4 space-y-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#e0dedb] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#d0ccc9] [&::-webkit-scrollbar-thumb:active]:bg-[#c0bbb8]">
                <div className="text-xs font-semibold text-[#605a57] uppercase tracking-wide mb-3 px-3">
                  Main
                </div>
                {[
                  { icon: Home, label: "Home", active: true },
                  { icon: FileText, label: "All Notes", count: notes.length },
                  { icon: Star, label: "Favorites", count: 8 },
                  { icon: Users, label: "Shared", count: 5 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                      item.active
                        ? "bg-[#37322f] text-white"
                        : "text-[#37322f] hover:bg-[#e0dedb]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.count && (
                      <span
                        className={`text-xs ${item.active ? "text-white/70" : "text-[#605a57]"}`}
                      >
                        {item.count}
                      </span>
                    )}
                  </div>
                ))}

                <div className="text-xs font-semibold text-[#605a57] uppercase tracking-wide mb-3 px-3 mt-6">
                  Organize
                </div>
                {[
                  { icon: Tag, label: "Tags" },
                  { icon: Archive, label: "Archive" },
                  { icon: Trash2, label: "Trash" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[#37322f] hover:bg-[#e0dedb]/50 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-[#e0dedb] bg-white/50">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e0dedb]/50 cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#37322f] to-[#605a57] rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[#37322f] truncate">
                      John Doe
                    </div>
                    <div className="text-xs text-[#605a57] truncate">
                      john@example.com
                    </div>
                  </div>
                  <Settings className="w-4 h-4 text-[#605a57] flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white">
              <div className="flex items-center justify-between p-6 border-b border-[#e0dedb]">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#605a57]" />
                    <input
                      type="text"
                      placeholder="Search notes..."
                      className="w-full pl-10 pr-4 py-2 bg-[#fbfaf9] border border-[#e0dedb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#37322f]/20"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-[#fbfaf9] rounded-lg transition-colors">
                    <Bell className="w-5 h-5 text-[#605a57]" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#e0dedb] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#d0ccc9] [&::-webkit-scrollbar-thumb:active]:bg-[#c0bbb8]">
                <h2 className="text-2xl font-semibold text-[#37322f] mb-6">
                  Recent Notes
                </h2>

                <div className="grid grid-cols-3 gap-4">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="p-4 bg-[#fbfaf9] border border-[#e0dedb] rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-8 h-8 bg-[#37322f] rounded-lg flex items-center justify-center text-white text-sm">
                          📝
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getTagColorClasses(note.color)}`}
                        >
                          {note.tag}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[#37322f] mb-2 group-hover:text-[#37322f]/80">
                        {note.title}
                      </h3>
                      <p className="text-xs text-[#605a57] mb-3 line-clamp-2">
                        {note.content}
                      </p>
                      <div className="text-xs text-[#605a57]">{note.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewNoteModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSaveNote}
      />
    </section>
  );
}
