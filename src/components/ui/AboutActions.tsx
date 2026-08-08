type AboutActionsProps = {
  sayHiLabel: string
  sayHiUrl: string
  resumeLabel: string
  resumeUrl: string
}

export default function AboutActions({
  sayHiLabel,
  sayHiUrl,
  resumeLabel,
  resumeUrl,
}: AboutActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Say Hi */}
      <a
        href={sayHiUrl || '#contact'}
        className="inline-flex h-[44px] items-center justify-center gap-1.5 rounded-full bg-[#111111] px-6 text-[13px] font-medium text-white transition-colors hover:bg-[#222222]"
      >
        {sayHiLabel || 'Say hi'} <span aria-hidden="true">↗</span>
      </a>

      {/* Download Resume */}
      {resumeUrl && (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#E0E0E0] bg-white px-6 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F4]"
        >
          <span aria-hidden="true">↓</span>
          {resumeLabel || 'Download resume'}
        </a>
      )}
    </div>
  )
}