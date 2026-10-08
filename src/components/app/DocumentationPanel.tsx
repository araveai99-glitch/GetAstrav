import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FileText, Plus, Save, History, Edit3, Eye } from 'lucide-react';

export const DocumentationPanel: React.FC = () => {
  const { docs, projects, createDoc, updateDoc } = useApp();
  const [selectedDocId, setSelectedDocId] = useState<string>(docs[0]?.id || '');
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || '');

  const currentDoc = docs.find((d) => d.id === selectedDocId);

  const handleCreateDoc = () => {
    if (!selectedProjectId) return;
    const newTitle = `New Project Spec (${new Date().toLocaleDateString()})`;
    const initialHtml = '<h1>Project Specification</h1><p>Start writing technical specs, specs, and meeting notes here...</p>';
    createDoc(selectedProjectId, newTitle, initialHtml);
  };

  const handleSaveDoc = () => {
    if (!currentDoc) return;
    updateDoc(currentDoc.id, editContent);
    setIsEditing(false);
  };

  const startEdit = () => {
    if (!currentDoc) return;
    setEditTitle(currentDoc.title);
    setEditContent(currentDoc.content);
    setIsEditing(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-espresso flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-orange" />
            Project Knowledge Documentation Specs
          </h2>
          <p className="text-xs text-terracotta-muted">
            TipTap rich text editor integration with version history audit logging
          </p>
        </div>

        <button
          onClick={handleCreateDoc}
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> New Document
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Document Sidebar List */}
        <div className="md:col-span-4 bg-white p-4 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-terracotta-muted px-2">
            Documents ({docs.length})
          </div>
          <div className="space-y-1">
            {docs.map((doc) => (
              <button
                key={doc.id}
                onClick={() => {
                  setSelectedDocId(doc.id);
                  setIsEditing(false);
                }}
                className={`w-full text-left p-3 rounded-xl text-xs transition-colors border ${
                  doc.id === selectedDocId
                    ? 'bg-surface-tier1 border-brand-orange text-espresso font-bold shadow-warm-sm'
                    : 'bg-white border-transparent text-terracotta hover:bg-surface-ambient'
                }`}
              >
                <div className="truncate font-bold">{doc.title}</div>
                <div className="text-[10px] text-terracotta-muted mt-1 font-mono">
                  Updated: {new Date(doc.updated_at).toLocaleDateString()}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Document Viewer / Editor Canvas */}
        <div className="md:col-span-8 bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
          {currentDoc ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-peach/60">
                <h3 className="text-lg font-bold text-espresso">{currentDoc.title}</h3>

                <div className="flex items-center gap-2">
                  {isEditing ? (
                    <button
                      onClick={handleSaveDoc}
                      className="px-3 py-1.5 rounded-xl bg-brand-green text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-warm-sm"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Changes
                    </button>
                  ) : (
                    <button
                      onClick={startEdit}
                      className="px-3 py-1.5 rounded-xl bg-surface-tier1 border border-brand-peach text-espresso text-xs font-bold hover:bg-surface-container transition-colors flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-brand-orange" /> Edit Doc
                    </button>
                  )}
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-surface-tier1 rounded-xl border border-brand-peach text-xs font-semibold text-espresso">
                    <span className="font-bold">Toolbar:</span> Bold | Italic | H1 | H2 | Bullet List | Code Block
                  </div>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full min-h-[300px] p-4 rounded-xl border border-brand-peach text-xs font-mono text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-surface-ambient"
                  />
                </div>
              ) : (
                <div
                  className="prose prose-sm max-w-none text-terracotta text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentDoc.content }}
                />
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-xs text-terracotta-muted">
              Select or create a document to inspect contents.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
