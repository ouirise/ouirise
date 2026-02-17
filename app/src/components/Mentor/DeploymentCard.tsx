interface DeployProps {
  title: string;
  subtitle: string;
  result: string;
  tech: string;
  tag: string;
}

export default function DeploymentCard({ 
  title, 
  subtitle, 
  result, 
  tech, 
  tag 
}: DeployProps) {
  return (
    <div className="
      glass border border-fog/10 rounded-lg p-6 
      hover:border-ray/40 hover:shadow-[0_0_20px_rgba(255,85,0,0.15)] transition-all duration-300
      group
    ">
      <div className="text-electric text-xs mb-2 font-mono">{tag}</div>
      <h4 className="text-fog text-lg font-bold mb-1 group-hover:text-ray transition-colors">{title}</h4>
      <p className="text-mist text-sm mb-3">{subtitle}</p>
      <p className="text-fog text-sm mb-4">{result}</p>
      <div className="text-mist text-xs border-t border-fog/10 pt-3 font-mono">{tech}</div>
    </div>
  );
}
