import { ArrowLeft, ShieldAlert, Lock, Eye, RefreshCw } from "lucide-react";

interface PrivacyPolicyViewProps {
  setView: (view: string) => void;
}

export default function PrivacyPolicyView({ setView }: PrivacyPolicyViewProps) {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#0C4D69]/5 text-center select-none">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <button
            onClick={() => setView("home")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C4D69] hover:underline cursor-pointer bg-transparent mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return Home
          </button>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0C4D69]">Privacy & Data Policy</h1>
          <p className="text-xs text-[#0C4D69]/85 max-w-lg mx-auto">
            Last Updated: June 24, 2026. This policy governs standard transactional telemetry and data safeguards at En-Tech S.C.
          </p>
          <div className="w-12 h-1 bg-[#0C4D69] mx-auto rounded-full" />
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm leading-relaxed text-[#0C4D69]/90">
          
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#0C4D69] flex items-center gap-2"><Lock className="w-5 h-5 text-[#0C4D69]" /> 1. Operational Integrity</h3>
            <p className="text-xs text-slate-600">
              At En-Tech S.C, we prioritize database safety and transactional boundaries. Any order request, full name, email contact, or telephone coordinates you input inside our portals remain strictly secured within our localized Firestore/SQL models.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#0C4D69] flex items-center gap-2"><Eye className="w-5 h-5 text-[#0C4D69]" /> 2. Data Access Limits</h3>
            <p className="text-xs text-slate-600">
              Only authorized engineers led by Lead Architect Abel T. Kassa have diagnostic parameters to verify contact telemetry logs. No system or client metrics are shared with third-party digital networks without explicit corporate authorization.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#0C4D69] flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-[#0C4D69]" /> 3. Secure Transactions</h3>
            <p className="text-xs text-slate-600">
              All digital invoices, payments, and system integrations are handled via secure SSL tunnel handshakes. Standard authentication states are encrypted with AES algorithms to prevent local device data leaks.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#0C4D69] flex items-center gap-2"><RefreshCw className="w-5 h-5 text-[#0C4D69]" /> 4. Updates & Revisions</h3>
            <p className="text-xs text-slate-600">
              We may periodically revise security layers to account for new custom web or ERP platform updates. We recommend checking this page to stay aligned with current data protection methods.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0C4D69]/10 text-center">
            <button
              onClick={() => setView("home")}
              className="px-5 py-2.5 bg-[#0C4D69] text-white rounded-xl font-bold text-xs hover:bg-[#0c4d69]/90 cursor-pointer transition-colors"
            >
              Acknowledge & Return
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
